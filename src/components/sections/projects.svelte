<script>
	import Card from '../card.svelte';
	export let card = [
		{
			plan: 'Firecrud',
		description: 'NPM package',
		features: ['10 free product slot', '₦500 to add a product', '₦1000 to add a category'],
		price: 'React API library for Firestore with CRUD-like syntax'
		},
		{plan: 'Grow by Aisely',
		description: 'CTO',
		features: [
			'2 free pages',
			'₦1000 to add a page',
			'extra charges applied for any other features'
		],
		price: 'March 2022 - present'},
	]
</script>

<section id="projects" class=" md:py-40 py-20">
	<p class="text-xs text-center mb-2">SIDE STUFF</p>
	<div class="container mx-auto">
		<div class="mb-20">
			<h2 class="md:text-5xl text-4xl text-center">
			Notable<br class="" /> Projects</h2>
		</div>
		<div class="flex flex-wrap flex-col md:flex-row gap-y-6 justify-center items-center ">
			<Card card={card[0]}/>
			<Card  card={card[1]}/>
		</div>
	</div>
</section>
