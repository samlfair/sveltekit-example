<script context="module">
	import createClient from "$lib/prismic.setup"
	import * as prismicH from "@prismicio/helpers"
  
  export async function load({ fetch })  {
    const client = createClient(fetch)
    const response = await client.get("example_custom_type")

    return { 
      props: { 
        response
     }
    }
  }
</script>

<script>
	export let response
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
  <h1>Home</h1>
  <ul>
    {#each response.results as document}
      <li>
        <a href={prismicH.asLink(document)}>
          {prismicH.asText(document.data.example_title)}
        </a>
      </li>
    {/each}
  </ul>
</section>