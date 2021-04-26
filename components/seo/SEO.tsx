const SEO: React.FC = () => (
  <>
    <title>TimesCraft</title>
    <link rel="manifest" href="./manifest.webmanifest" />
    {/*  PWA  */}
    {/*  ios support  */}
    <link rel="apple-touch-icon" href="./assets/icons/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-status-bar" content="#7a4626" />
    <meta name="theme-color" content="#3b691c" />
    {/*  Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://timescraft.netlify.app" />
    <meta property="og:title" content="TimesCraft" />
    <meta
      name="image"
      property="og:image"
      content="./assets/images/timescraft_preview.png"
    />
    <meta
      property="og:description"
      content="Learn times table with Minecraft"
    />
    <meta property="og:site_name" content="TimesCraft" />
    <meta name="author" content="Sid H. Lee" />
    {/*  Next tags are optional but recommended  */}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />

    {/*  Twitter cards */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@HayounSid" />
    <meta name="twitter:creator" content="Sid Hayoun Lee" />
    <meta name="twitter:url" content="https://timescraft.netlify.app" />
    <meta name="twitter:title" content="TimesCraft" />
    <meta
      name="twitter:description"
      content="Learn times table with Minecraft"
    />
    <meta name="twitter:image" content="./favicon.ico" />
  </>
);

export default SEO;
