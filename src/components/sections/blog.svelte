<script>
	import Card from '../card.svelte';
	let posts
	fetch('https://dev.to/api/articles?username=paul_emechebe')
        .then(response => response.json())
        .then(data => {
			 posts = data;
		});


	
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
		
	]
</script>

<section id="blog" class="my-32 md:py-40 py-20">
	<p class="text-xs text-center mb-2">I WRITE</p>
	<div class="container mx-auto  my-2">
		<div class="mb-20">
			<h2 class="md:text-5xl text-4xl text-center">
			Blog <br class="md:block hidden" />posts</h2>
		</div>
		<!-- { #each posts as post, index }
		<li>{index} - {post}</li>
		{/each} -->
		<div class="flex flex-wrap flex-col md:flex-row gap-y-6 justify-center items-center ">
			<Card card={card[0]}/>
			<Card  card={card[1]}/>
		</div>
	</div>
</section>
