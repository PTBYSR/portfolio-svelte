<script>
	import Blogcard from '../blogcard.svelte';
import Card from '../card.svelte';
	// fetch('https://dev.to/api/articles?username=paul_emechebe')
    //     .then(response => response.json())
    //     .then(data => {
	// 		 var posts = data
	// 		 console.log(data)
	// 		 return posts
	// 	});
		let tests = ["test1", "test2", "test3"]

	export let card = [
		{
			plan: 'Building a startup (build log 2#): Authenticating students with Supabase',
		description: 'Oct 20',
		price: '6 min read',
		src: 'https://dev.to/paul_emechebe/building-a-startup-build-log-2-authenticating-users-with-supabase-1p1b'
		},
		{
			plan: 'Building a startup (build log 1#): The landing page',
		description: 'Oct 14',
		price: '10 min read',
		src: 'https://dev.to/paul_emechebe/building-grow-10-build-log-1-the-landing-page-484d'
		},
		{
			plan: 'Polymorphic Components: Authoring flexible and reusable components.',
		description: 'Aug 29',
		price: '15 min read',
		src: 'https://dev.to/paul_emechebe/polymorphic-components-authoring-flexible-and-reusable-components-1efo'
		},
		{
			plan: 'Supercharging your React project with Memoization',
		description: 'Jul 4',
		price: '3 min read',
		src: 'https://dev.to/paul_emechebe/supercharging-react-with-memoization-1999'
		},
		{
			plan: 'Is Virtual DOM overhyped',
		description: 'Jun 13',
		price: '4 min read',
		src: 'https://dev.to/paul_emechebe/is-virtual-dom-overhyped-96'
		},
		
	]
</script>

<section id="blog" class="my-32 md:py-40 py-20">
	<p class="text-xs text-center mb-2">I WRITE</p>
	<div class="container mx-auto  my-2">
		<div class="mb-20">
			<!-- {posts + "hi"} -->
			<h2 class="md:text-5xl text-4xl text-center">
			Blog <br class="md:block hidden" />posts</h2>
		</div>
		<!-- { #each posts as post, index }
		<li>{index} - {post.title}</li>
		{/each} -->
		<div class="flex flex-wrap flex-col md:flex-row gap-y-6 justify-center items-center ">
			<Blogcard card={card[0]}/>
			<Blogcard card={card[1]}/>
			<Blogcard card={card[2]}/>
			<Blogcard card={card[3]}/>
			<Blogcard card={card[4]}/>
		</div>
	</div>
</section>
