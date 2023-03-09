import Head from "next/head";

export function HeadDocument() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Artur Abreu | Front-end Developer | Portfolio</title>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      <meta
        name="title"
        content="Artur Abreu | Front-end Developer | Portfolio"
      />
      <meta
        name="description"
        content="Me chamo Artur Abreu e este é meu portfolio"
      />
      <meta name="robots" content="index, follow" />

      <meta name="author" content="Artur Abreu" />
      <meta
        name="keywords"
        content="Artur Abreu developer, 
          desenvolvedor, programador, front-end, developer, typescript,
          reactjs, nextjs, Artur Abreu portfolio,
          developer front-end, javascript, biasi, desenvolver sites"
      />
      <meta property="og:url" content="https://biasiportfolio.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Biasi | Front-end Developer | Portfolio"
      />
      <link rel="canonical" href="" />
      <meta
        property="og:description"
        content="Especialista em desenvolvimento Front-End"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta name="revisit-after" content="1 day" />

      <meta
        name="google-site-verification"
        content="fZ7fzHydKZu0nz8NHzxtboFYMUHL2MBh-yIeV1PW99I"
      />
    </Head>
  );
}
