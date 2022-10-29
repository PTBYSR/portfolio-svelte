<script>
	import Card from '../card.svelte';
	export let card = [
		{
			plan: 'Aisely',
		description: 'Product Manager',
		features: ['10 free product slot', '₦500 to add a product', '₦1000 to add a category'],
		price: 'Nov 2021 - March 2022'
		},
		{plan: 'Grow by Aisely',
		description: 'CTO',
		features: [
			'2 free pages',
			'₦1000 to add a page',
			'extra charges applied for any other features'
		],
		price: 'March 2022 - present'},
		{plan: 'Private Digital Marketer',
		description: 'Frontend Developer',
		features: [
			'2 free pages',
			'₦1000 to add a page',
			'extra charges applied for any other features'
		],
		price: 'March 2022 - present'},
		{plan: 'Freelance',
		description: 'Frontend Developer',
		features: [
			'2 free pages',
			'₦1000 to add a page',
			'extra charges applied for any other features'
		],
		price: '2019 - 2022'},
	]
</script>

<section id="work" class=" md:py-40 py-20">
	<p class="text-xs text-center mb-2">EXPERIENCE</p>
	<div class="container mx-auto">
		<div class="mb-20">
			<h2 class="md:text-5xl text-4xl text-center">
			Work<br class="" /> Experience</h2>
		</div>
		<div class="flex flex-wrap flex-col md:flex-row gap-y-6 justify-center items-center ">
			<Card card={card[0]}/>
			<Card  card={card[1]}/>
			<Card  card={card[2]}/>
			<Card  card={card[3]}/>
		</div>
	</div>
</section>
