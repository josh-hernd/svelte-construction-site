<script lang="ts">
	import type { ActionResult } from '@sveltejs/kit';
	import type { EmptyFormType, InputType } from '$lib/types/postTypes';

	import { onMount } from 'svelte';
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	import Input from './Input.svelte';
	import { captchaVal, isEmpty, random_rgba } from '../index';

	export let contactForm: InputType[];
	let form: any;
	let emptyForm = {} as EmptyFormType;
	let formHeight: number;
	
	const ramdValue = captchaVal();

	async function handleSubmit(this: HTMLFormElement) {
		const formData = new FormData(this);

		const response = await fetch(this.action, {
			method: 'POST',
			body: formData,
			headers: { gotCha: ramdValue, 'x-sveltekit-action': 'true' }
		});

		const result: ActionResult = deserialize(await response.text());
		if (result.type === 'success') {
			await invalidateAll();
		}
		applyAction(result);
		form = result;
	}

	let canvas: any;
	onMount(() => {
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = random_rgba();
		ctx.font = 'bold 18px Arial';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(ramdValue, canvas.width / 2, canvas.height / 2);
	});
</script>

{#if !form?.data.success}
	<form
		method="POST"
		action="/contact?/contact"
		on:submit|preventDefault={handleSubmit}
		bind:clientHeight={formHeight}
	>
		<div class="flexFields">
			{#each contactForm as field}
				<Input {field} bind:value={emptyForm} />
			{/each}

			<div class="_human">
				<label for="_gotcha">Prove you are a Human</label>
				<div class="field">
					<canvas bind:this={canvas} width={100} height={50} />
					<input
						type="text"
						name="_gotcha"
						bind:value={emptyForm._captcha}
						maxlength="4"
						autocomplete="off"
					/>
				</div>
			</div>

			<div class="conditions">
				{#if form?.data.error}
					<p>{form.data.error}</p>
				{:else}
					<p>By submiting you are agreeing to our Terms and Conditions.</p>
				{/if}
			</div>
			<div class="field">
				<button class="cta wobble-hor-bottom" disabled={isEmpty(emptyForm, ramdValue)}
					>Submit</button
				>
			</div>
		</div>
	</form>
{:else}
	<div class="success" style="height: {formHeight}px;">
		<h3>{form?.data.msg}</h3>
	</div>
{/if}

<style lang="scss">
	@use '../../../abstract/palettes.scss' as *;
	@use '../../../abstract/mixins.scss' as *;

	$cta-button: (
		null: 15px,
		small: 16px,
		medium: 17px,
		large: (
			18px,
			22px
		)
	);
	form {
		padding: 40px;
		background: getColor(whites, 20);
		box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.15);
		border-radius: 6px;
		@include dynamicpoint($max: 950px) {
			padding: 35px;
		}
	}

	h3,
	p {
		color: getColor(darkgrays, 60);
		text-align: center;
	}
	.cta {
		width: 100%;
		padding: 21px 0px;
		margin: 15px 0px;
		color: rgb(253, 253, 253);
		@include font-size($cta-button);
		font-weight: 800;
		border: 0;
		-webkit-appearance: none;
		-moz-appearance: none;
		cursor: pointer;
	}

	._human {
		width: max-content;
		position: relative;
		padding: 30px 10px 10px;
		margin: 22px auto 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
		.field {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 0;
			input {
				padding: 15px;
				color: getColor(darkgrays, 80);
				background: getColor(whites, 100);
				border: 0.5px solid #d1d3d7;
				border-radius: 6px;
			}
		}
		label {
			position: absolute;
			top: 10px;
			left: 0;
			right: 0;
			text-align: center;
			color: getColor(darkgrays, 80);
			user-select: none;
			-webkit-user-select: none;
			-moz-user-select: none;
			pointer-events: none;
		}
	}

	button {
		&:disabled {
			opacity: 0.5;
			pointer-events: none;
		}
	}
	.success {
		// height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h3 {
			color: var(--accent-color);
		}
	}
</style>
