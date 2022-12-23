<script lang="ts">
	import type { InputType } from '$lib/types/postTypes';
	import { isNumber } from '../index';

	export let field = {} as InputType;
	export let value: any;

	let count = '200 character limit';
	function checkWordLen(this: HTMLTextAreaElement) {
		if (this.value.length == this.maxLength) {
			count = `${this.value.length} character limit reached`;
		} else {
			count = `${this.maxLength - this.value.length} character limit`;
		}
	}

	function typeAction(node: { type: string }) {
		node.type = field.type;
	}
</script>

{#if field.type == 'textarea'}
	<div class="field">
		<label for={field.name}>{field.label}</label>
		<span>- {count}</span>
		<textarea
			name={field.name}
			cols={field?.cols}
			rows={field?.rows}
			on:input={checkWordLen}
			maxlength="200"
		/>
	</div>
{:else if field.type == 'tel'}
	<div class="field">
		<label for={field.name}>{field.label}</label>
		<input
			use:typeAction
			name={field.name}
			on:input={isNumber}
			required={field.required}
			bind:value={value[field.name]}
		/>
	</div>
{:else}
	<div class="field">
		<label for={field.name}>{field.label}</label>
		<input
			use:typeAction
			name={field.name}
			required={field.required}
			bind:value={value[field.name]}
		/>
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
	.field {
		position: relative;
		margin: 15px auto;
		display: flex;
		flex-direction: column-reverse;
		input,
		textarea {
			padding: 30px 30px 25px;
			background: getColor(whites, 100);
			border: 0.5px solid getColor(darkgrays, 20);
			border-radius: 6px;
		}
		label {
			position: absolute;
			top: 7px;
			left: 30px;
			font-weight: 500;
			font-size: 14.5px;
			line-height: 18px;
			color: getColor(darkgrays, 80);
			background: getColor(whites, 100);
			-webkit-user-select: none;
			-moz-user-select: none;
			user-select: none;
			pointer-events: none;
		}
		span {
			position: absolute;
			bottom: 10px;
			right: 10px;
			font-size: 12px;
			font-weight: 400;
			color: getColor(darkgrays, 80);
			user-select: none;
			-webkit-user-select: none;
			-moz-user-select: none;
			pointer-events: none;
		}
	}
	input:-webkit-autofill {
		color: getColor(darkgrays, 80) !important;
		background-image: unset !important;
		background-color: getColor(whites, 100) !important;
		appearance: none;
		border: 0;
	}

	input:-webkit-autofill {
		box-shadow: 0 0 0 50px getColor(whites, 100) inset;
		-webkit-box-shadow: 0 0 0 50px getColor(whites, 100) inset; /* Change the color to your own background color */
		-webkit-text-fill-color: getColor(darkgrays, 80);
	}

	input:-webkit-autofill:focus {
		box-shadow: 0 0 0 50px getColor(whites, 100) inset;
		-webkit-box-shadow: 0 0 0 50px getColor(whites, 100) inset; /*your box-shadow*/
		-webkit-text-fill-color: getColor(darkgrays, 80);
	}
</style>
