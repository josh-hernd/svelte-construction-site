<script lang="ts">
	import type { InputField } from '$lib/types/postTypes';

	export let contactForm: InputField[];

	const isRequired = (field: InputField): boolean => {
		if (field.rules) {
			if (field.rules.length > 0) {
				return true;
			}
		}
		return false;
	};
</script>

<form>
	<div class="flexFields">
		{#each contactForm as field, i}
			{#if field.type == 'input'}
				<div class="field">
					<input
						type={field.attributes.type}
						name={field.name}
						id={field.attributes.id}
						value={field.value}
						required={isRequired(field)}
					/>
					<label for={field.name} placeholder={field.attributes.label}
						>{field.attributes.label}</label
					>
				</div>
			{:else if field.type == 'textarea'}
				<div class="field">
					<textarea name={field.name} id={field.attributes.id} cols="30" rows="4" />
					<label for={field.name} placeholder={field.attributes.label}
						>{field.attributes.label}</label
					>
				</div>
			{/if}
		{/each}
	</div>
	<div style="position: relative; display:none;">
		<label for="honeypot">honeypot</label>
		<input type="text" name="honeypot" id="honeypot" />
	</div>
	<div class="conditions">
		<p>
			By submiting you are agreing to our Terms and Conditions.
		</p>
	</div>

	<input class="cta wobble-hor-bottom" type="submit" value="Submit" />
</form>

<style lang="scss">
	@use '../../abstract/palettes.scss' as *;
	@use '../../abstract/mixins.scss' as *;

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
	}

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
</style>
