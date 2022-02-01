<script context="module">
	import createClient from "$lib/prismic.setup"
	import * as prismicH from "@prismicio/helpers"
  
  export async function load({ params, fetch })  {
    const client = createClient(fetch)
    const document = await client.getByUID("example_custom_type", params.uid)

    return { 
      props: { 
        document
     }
    }
  }
</script>

<script>
	export let document
</script>

<!-- Title as plain text -->
<svelte:head>
	<title>
    {prismicH.asText(document.data.example_title)}
  </title>
</svelte:head>

<section>
  <a href="/">« Back to home</a>

  <!-- Title -->
  {@html prismicH.asHTML(document.data.example_title)}

  <!-- Date -->
  <small>
    <time datetime={
      prismicH.asDate(document.data.example_date).toISOString()
    }>
      {prismicH.asDate(document.data.example_date)  
        .toLocaleDateString("en-US", { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }
    </time>
  </small>

  <!-- Image -->
  <img 
    src={prismicH.asImageSrc(document.data.example_image, {
      vib: 80,
      gam: 20,
    })}
    alt={document.data.example_image.alt}
  />

  <!-- Rich text -->
  {@html prismicH.asHTML(document.data.example_rich_text)}
</section>