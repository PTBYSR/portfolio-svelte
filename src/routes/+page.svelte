<script>
	import Header from '../components/sections/header.svelte';
	import Landing from '../components/sections/landing.svelte';
	import Footer from '../components/sections/footer.svelte';
  import { MetaTags } from 'svelte-meta-tags';
	import Blog from '../components/sections/blog.svelte';
	import Work from '../components/sections/work.svelte';
	import Contact from '../components/sections/contact.svelte';
	import Projects from '../components/sections/projects.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter&family=Libre+Baskerville&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<MetaTags
  title="Paul-Simon Emechebe"
  titleTemplate="%s | Portfolio "
  description="My portfolio"
  canonical=""
  openGraph={{
    url: '',
    title: 'Paul-Simon Emechebe',
    description: 'My portfolio website',
    images: [
      {
        url: 'https://ridox-studio.vercel.app/ridox-tab-icon.png',
        width: 800,
        height: 600,
        alt: ''
      },
      {
        url: 'https://ridox-studio.vercel.app/ridox-tab-icon.png',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second'
      },
    ],
    site_name: 'Paul-Simon Emechebe'
  }}
  twitter={{
    handle: '@ptbthefirst',
    site: '@site',
    cardType: 'large',
    title: 'Paul-Simon Emechebe',
    description: 'My porfolio site',
    image: '',
    imageAlt: 'Twitter image alt'
  }}
  facebook={{
    appId: '1234567890'
  }}
/>

<Header />
<Landing />
<Blog />
<Work />
<Projects />
<Contact/>
<Footer />
