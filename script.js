import * as THREE from "three";

const galleryData = [
  {
    category: "Acrylic Paintings",
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4baj0fGwoi00gQqqZyVyq3xdy1u8EFKxPtMko3CJohGp169STKBTi-eqfWGwE9hSEJ2CsDSEIJJ7wAz0DRw33prgCFPXR5PTffttKJnTDAvfxSwNI0DLpx16FK5XB18S23jKjvsJNVAgWxl2WA9J2-Nq9CpfFOwUR7qBuI_eZ0lLmAfBHG-0Iz14mFR8/s320/WhatsApp%20Image%202026-05-30%20at%203.32.01%20PM%20(5).jpeg"
    ]
  },
  {
    category: "Landscape Paintings",
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXzy0cgo3otaRG35AYpZp9RGnCAH-GQGoqCqdGX4dPBl8H24p_F4_wcAwiaKtiUuM-el9765YcucT9Nhmx6k9khePfgeYCuf0zhElJcutXauvT78aIlM6u0-EIMR3Jhst_A_aQcKayjTv57ukfTf_wYAOmZ5e3guAf_ed8yZbAfiDYD1U7pWukf2iCVa4/s320/WhatsApp%20Image%202026-05-30%20at%202.33.23%20PM.jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl2MojOwov2biLBJHKO8mKnOMLPfvZHI1yWteb-W4aC9_b4slaNRVsL-gcNStM_4yCbn6wt1OqTlHpUv24N2G8K43QbzkTRqkuUni9-yFX91g0W7uQ4cjwKvuu-Z7myM2m4_aMobHeJImOqk_IEbtrokU6_p5WtQZz16t6ECqaHuqbhGtlfPyvRp312Wg/s320/WhatsApp%20Image%202026-05-30%20at%202.33.24%20PM%20(1).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfCK2WEsBsZKR7a9QXlO4IyJ0crXhw3pQdt7pt9-FjBskGeBaKeTQFYR5U5OmCe8fQ90vm6YixBZJ1KqUhZ-xBQm7y79ddMCRPBGO75AT5jWtSIq-J8TkIggROdPYt3dDhW-8jwO6FQ_t6nDqY0mpxl0ZU71L-Dp5JrHOrNZpjBchA6yRouXuoNv_xSew/s320/WhatsApp%20Image%202026-05-30%20at%202.34.00%20PM.jpeg"
    ]
  },
  {
    category: "Pencil Arts",
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1vNRpo2LbYRyYwLK0o3Tv4CC8g5w_55a9-ItW5MjKAzHKQw_i43t9PReuG5_vmyMacvvzj_4gKFW_DYr1lu7WWZkr3KgYD7iDtctFvqFw3rbXovmtPDwGTM2tC9ievhDRgTzot-4ZkgrJZnZNbsPPNKTadrstNffjFMrSUG0toh1jzSVj754f-NJ35KM/s320/WhatsApp%20Image%202026-05-30%20at%202.24.08%20PM%20(1).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoDQVzZNUFd9hruR7T3P_es7uCUU4HGng5YWGyEo2tWhuA-dJcqgSBoUskGQUPzGWTyzF53vT8E4ZZbgEWGX2weYgs5lMskThk52eLlIIpwI-tdxmmy8aLbg8nRuuzYqSsnpFNCaltDs93nk0dShynPeBaK7qTaJclH4SfthMUnPuYOj3xoXqaj_xdidE/s320/WhatsApp%20Image%202026-05-30%20at%202.24.08%20PM%20(2).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9EChyphenhyphenUo4DzOH8-U2mGHzaExQqUaAwt0F7qdX7ornxvvkSgLqZKzVBWbXG7xdnfQ8DSgWLrTvNLAm-JLRW2yl2op_MHTdRlUTnWTzCzLt6qJy-uRrtyrb-9X5AFgUCkl-nH_4NR6-XnqYm1o16910cq1Llkj13AoqPP9TqommkNJjX-fyGr7dgLoqnDP4/s320/WhatsApp%20Image%202026-05-30%20at%202.24.08%20PM%20(3).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj77xt9JUwLIhnx10BZH2WpeZfiR4oDqK7pVNims3n5oYEmO5EDef2BdWv-w_ms0WglvR6i7zGgM4RStnhs4CnXWuh_lshKc88n9cPEgmizGquu4mmPwvVLJ8WU-C953WY-6USW-HXTHftYpziE9pzGiVOsKJwomUmkSyXSXrqJiWewdnalIk7EMTrLry4/s320/WhatsApp%20Image%202026-05-30%20at%202.24.08%20PM.jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-liYe3KHBEaX8oNIcmNjt7ipf58WErjSRSoZc4N-ok0idNCKw9UUoCJwfgfrtzp4GajFJip7DMWRlT7p-YAtpfxYRPCM_LOrw2dBSgoFtLruKUu7ZHhgL6tnIhTE18K2JYY_apTAtIqw8zX0-wINtIndmJihVNZF6jxFTu_mDLeDLedmgDuQZ2MEVTFc/s320/WhatsApp%20Image%202026-05-30%20at%202.24.09%20PM%20(3).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGe3jM8pJA3N9iE75A22VbzbVR_G48vJ2Cy2mpNDtenxFzV0j5ACk5aBpjuIatiYhc-Ivl-KGy6ByQfOTHkEY-K6pOvhyphenhyphenA89DyHMr-_nPw6QKKaFExwSkqifvlOHjS_-_bv_Ii0IAm0yvbsMEBOIwYxNDzWl4lCtYqc7x3ZJzY5OjQkR6cDgXQH8bBc24/s320/WhatsApp%20Image%202026-05-30%20at%202.24.09%20PM.jpeg"
    ]
  },
  {
    category: "Wall Paintings",
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFrraOfZaOafGhOc_r3AIHm6EnkSxGToobVhnHwMM_fUL88g872aqCKiWO08moXj32oW-2uBDgeOjytxg930_LhGW8EW2aTgxD-9yPOtUp5TdE9sWEyNnMaNm4sg9ZDVEWfTSsEss_DJvVmSDDlZkzLrX-FuoU537ypAtWVnV8W4fOtGDclQSVX8sXFAg/s320/WhatsApp%20Image%202026-05-30%20at%203.07.38%20PM.jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDJmRt3qp00AEVpiBoEe3P_LgLvSXc-CgGcsiYPBo3uEToeGVcR_6bjFxKGz2bLcwqTJ6JMCtui-OtY65T65opA_1ogsjfhNAalgL_8erlsG6DNDXKqAVP-uDOAkCfY3PcDmHpb78KCJFdbP9S0dzws1dIOGp_NE1c4I7EcnUIIIZt8rBjzzd4C33pA-M/s320/WhatsApp%20Image%202026-05-30%20at%203.07.45%20PM%20(1).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJOe1oLdUDjnu2_LnYb6A4klAC4Y4RwhFYW-jDmpMnJ2ckgzlGwczl2GD9USZA2_1olH2G-gbYw5ikSB8kGLIAjyQO2C1Ht858Gx-ZtvVoKuqPb_o-r0tqn5MbqUTrcDbaSneZpDqnX3jkSTjNlLN_ttdCaf32btrL2z3UTi-h1Ty_XQlb5N4CuykFIc0/s320/WhatsApp%20Image%202026-05-30%20at%203.07.45%20PM%20(2).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwGv4BRTVRi7h6fVGNXEOAbrKyruDsImf-txrbAVzpDBn1rj6g1lpTMm0e5Mu6qjdkFZmYCNESKPeQ605GJ2XA4HyyPdAMAeiu8DCDsr8mGN6PjbLI8IQRCiwr53fxjttH5oLQyAWkA8kXp5anarUfeCnbZ03xyHWLKehkiFSGXIu1ekX4VZ8arUmpwhE/s320/WhatsApp%20Image%202026-05-30%20at%203.07.45%20PM.jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj1inHaXr4GqVBcdEaEoSqZoJZfi8gdV6Dtrv8A8mh4kHzeabyCH25PYKD7nWVu0UIb7Vtg2zeIH0qFUXdR3XOVYZIY64hBsalRjXNSHf2HNZ77rD3b8tiCVZq-Zdjgqadn6sWaRGaLjiAAB5Q5CyRANckMTar2l4mT4kRgGvARWNsjFUxVKi0kphlzCo/s320/WhatsApp%20Image%202026-05-30%20at%203.07.48%20PM%20(1).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiz-JM4c0Re4g7BWqrXkE-WdGMJqsgLIYiPUZBUfc0tHnxjsWXntylZWLUYECs6wcWozIPQM4FGzhszYwjhw7e_Mbzy9WDk5q__YyzQy7cXcxX4lW8_WmU1nRZKT3JEiTMl-LRvR8W5AfFe88RcYyVLr1JU0yt8Z-b75sC43u0bmBQtb6VVAllGClCihcc/s320/WhatsApp%20Image%202026-05-30%20at%203.07.48%20PM%20(2).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgM31lEmN34mHQ74769_taVod9PIJsSB6VgqOLwylfgO71AoW4Grmq6No6IQdH6MBCsh2SuLyhiDNYOFy7RyGSi22_EDiTKYLz6-A2h2hHER41v4VMPEKdEboDftxWX1JbCCTigYMmuyuhw7J2CS0szrG4AvcwTi7YlTqzXDcKaOvNQpup_ChxtsINzxvg/s320/WhatsApp%20Image%202026-05-30%20at%203.07.48%20PM%20(4).jpeg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXI9Jj3dXC2p_BlelSHbXS1aCmRq3qZqlDmeHm1As_0ttTSOZbLhrZP6j-Bb3HUnMOT9l9tAUDknRbO5HyUt1x4iEb-MapD_CXpdWIBMZZ0qJopnhq99gzwcIOsH3RcUyMdB6bf9zshfbv71EAL1cMoH0OEszV-vRMp71QF63WqQgmnj1e1aizVaGbcDg/s320/WhatsApp%20Image%202026-05-30%20at%203.07.48%20PM.jpeg"
    ]
  }
];

const allArtworks = galleryData.flatMap((group) =>
  group.images.map((src, index) => ({
    src,
    category: group.category,
    title: `${group.category.replace(" Paintings", "").replace(" Arts", " Art")} ${index + 1}`
  }))
);

const services = [
  ["Acrylic Painting", "Premium acrylic artwork for homes, studios and gifting.", galleryData[0].images[0]],
  ["Landscape Painting", "Scenic hand-painted landscapes with rich color depth.", galleryData[1].images[0]],
  ["Pencil Portraits", "Detailed graphite portraits from your favorite photo.", galleryData[2].images[0]],
  ["Wall Painting", "Custom wall art for homes, cafes, schools and offices.", galleryData[3].images[0]],
  ["Custom Murals", "Large-scale mural concepts designed around your space.", galleryData[3].images[2]],
  ["Canvas Art", "Ready-to-display canvas paintings with premium finish.", galleryData[1].images[1]],
  ["Name Boards", "Hand-painted signs and name boards with artistic lettering.", galleryData[3].images[5]],
  ["Custom Orders", "Share an idea and commission a one-of-a-kind artwork.", galleryData[2].images[3]]
];

/* =========================================
   SUBTLE 3D ART TOOLS BACKGROUND
   No geometric balls / no particle field.
   Tools stay behind all website content.
========================================= */
const bgCanvas = document.getElementById("bg-canvas");

if (bgCanvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    48,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 12;

  const renderer = new THREE.WebGLRenderer({
    canvas: bgCanvas,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  scene.add(new THREE.AmbientLight(0xffffff, 1.45));

  const warmLight = new THREE.DirectionalLight(0xe9c7a5, 1.8);
  warmLight.position.set(5, 7, 8);
  scene.add(warmLight);

  const greenLight = new THREE.PointLight(0x3f6656, 1.2, 30);
  greenLight.position.set(-7, -3, 7);
  scene.add(greenLight);

  const tools = [];

  const makeMaterial = (color, roughness = 0.48, metalness = 0.12, opacity = 0.26) =>
    new THREE.MeshStandardMaterial({
      color,
      roughness,
      metalness,
      transparent: true,
      opacity,
      depthWrite: false
    });

  const woodMat = makeMaterial(0x9b704d, 0.7, 0.02, 0.27);
  const darkGreenMat = makeMaterial(0x315747, 0.42, 0.12, 0.28);
  const creamMat = makeMaterial(0xe9dfc9, 0.5, 0.05, 0.34);
  const brassMat = makeMaterial(0xb98a58, 0.28, 0.68, 0.34);
  const bristleMat = makeMaterial(0x66513d, 0.8, 0.0, 0.3);
  const terracottaMat = makeMaterial(0xb86f4e, 0.5, 0.08, 0.25);

  function addBrush(x, y, z, scale, rotation, speed) {
    const group = new THREE.Group();

    // Long wooden handle
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.075, 0.105, 1.65, 16),
      woodMat
    );
    handle.position.y = -0.15;
    group.add(handle);

    // Metallic ferrule and two fine rings
    const ferrule = new THREE.Mesh(
      new THREE.CylinderGeometry(0.115, 0.095, 0.34, 16),
      brassMat
    );
    ferrule.position.y = 0.82;
    group.add(ferrule);

    [-0.11, 0.09].forEach((offset) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.105, 0.012, 6, 18),
        creamMat
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.82 + offset;
      group.add(ring);
    });

    // Soft tapered bristles
    const bristles = new THREE.Mesh(
      new THREE.ConeGeometry(0.095, 0.48, 18),
      bristleMat
    );
    bristles.position.y = 1.22;
    group.add(bristles);

    const tip = new THREE.Mesh(
      new THREE.ConeGeometry(0.025, 0.18, 12),
      darkGreenMat
    );
    tip.position.y = 1.53;
    group.add(tip);

    group.position.set(x, y, z);
    group.scale.setScalar(scale);
    group.rotation.z = rotation;
    group.rotation.x = -0.12;
    group.userData = { baseX: x, baseY: y, speed, phase: Math.random() * 6 };
    scene.add(group);
    tools.push(group);
  }

  function addPencil(x, y, z, scale, rotation, speed, colorMat = terracottaMat) {
    const group = new THREE.Group();

    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.065, 0.065, 1.8, 12),
      colorMat
    );
    group.add(body);

    const woodTip = new THREE.Mesh(
      new THREE.ConeGeometry(0.064, 0.22, 12),
      woodMat
    );
    woodTip.position.y = -1.0;
    group.add(woodTip);

    const graphite = new THREE.Mesh(
      new THREE.ConeGeometry(0.018, 0.08, 8),
      darkGreenMat
    );
    graphite.position.y = -1.14;
    group.add(graphite);

    const endCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.066, 0.066, 0.12, 12),
      brassMat
    );
    endCap.position.y = 0.96;
    group.add(endCap);

    group.position.set(x, y, z);
    group.scale.setScalar(scale);
    group.rotation.z = rotation;
    group.userData = { baseX: x, baseY: y, speed, phase: Math.random() * 6 };
    scene.add(group);
    tools.push(group);
  }

  function addMarker(x, y, z, scale, rotation, speed) {
    const group = new THREE.Group();

    const barrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.105, 0.105, 1.35, 16),
      darkGreenMat
    );
    group.add(barrel);

    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.11, 0.25, 16),
      terracottaMat
    );
    cap.position.y = 0.78;
    group.add(cap);

    const nib = new THREE.Mesh(
      new THREE.ConeGeometry(0.075, 0.2, 16),
      creamMat
    );
    nib.position.y = -0.76;
    nib.rotation.z = Math.PI;
    group.add(nib);

    group.position.set(x, y, z);
    group.scale.setScalar(scale);
    group.rotation.z = rotation;
    group.userData = { baseX: x, baseY: y, speed, phase: Math.random() * 6 };
    scene.add(group);
    tools.push(group);
  }

  // Spread around the viewport edges so headings and artwork remain clear.
  addBrush(-6.2, 2.2, -2.2, 1.15, -0.55, 0.42);
  addBrush(6.0, -2.1, -3.0, 0.92, 0.58, 0.34);
  addPencil(5.4, 3.0, -4.0, 0.95, -0.72, 0.3);
  addPencil(-5.7, -3.0, -3.5, 0.78, 0.62, 0.38, creamMat);
  addMarker(1.0, 4.0, -5.0, 0.8, 0.32, 0.28);

  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let animationFrame = 0;

  window.addEventListener("pointermove", (event) => {
    pointer.targetX = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
  }, { passive: true });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  });

  const clock = new THREE.Clock();

  function animateArtTools() {
    animationFrame = requestAnimationFrame(animateArtTools);
    const time = clock.getElapsedTime();

    pointer.x += (pointer.targetX - pointer.x) * 0.025;
    pointer.y += (pointer.targetY - pointer.y) * 0.025;

    tools.forEach((tool) => {
      const { baseX, baseY, speed, phase } = tool.userData;
      tool.position.x = baseX + Math.sin(time * speed + phase) * 0.16 + pointer.x * 0.08;
      tool.position.y = baseY + Math.cos(time * speed * 0.8 + phase) * 0.2 + pointer.y * 0.06;
      tool.rotation.y = Math.sin(time * speed * 0.6 + phase) * 0.12;
      tool.rotation.x = -0.12 + Math.cos(time * speed * 0.5 + phase) * 0.06;
    });

    renderer.render(scene, camera);
  }

  // Respect reduced-motion preferences and keep the scene lightweight.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    renderer.render(scene, camera);
  } else {
    animateArtTools();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
    } else if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animateArtTools();
    }
  });
}

const tabs = document.getElementById("category-tabs");
const gallery = document.getElementById("gallery-grid");
const featuredGrid = document.getElementById("featured-grid");
const servicesGrid = document.getElementById("services-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(artwork) {
  lightboxImg.src = artwork.src;
  lightboxImg.alt = artwork.title;
  lightboxCaption.textContent = `${artwork.title} . ${artwork.category}`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

function renderTabs() {
  tabs.innerHTML = galleryData.map((group, index) => `
    <button class="tab ${index === 0 ? "active" : ""}" type="button" data-category="${group.category}">
      ${group.category}<span>${group.images.length}</span>
    </button>
  `).join("");
}

function renderGallery(category = galleryData[0].category) {
  const group = galleryData.find((item) => item.category === category);
  const artworks = group.images.map((src, index) => ({ src, category, title: `${category} ${index + 1}` }));
  gallery.innerHTML = artworks.map((artwork, index) => `
    <article class="art-card reveal" style="animation-delay:${index * 45}ms" data-index="${index}">
      <img src="${artwork.src}" alt="${artwork.title}" loading="lazy" />
      <div class="art-meta"><span>${artwork.category}</span><strong>${artwork.title}</strong></div>
    </article>
  `).join("");
  gallery.querySelectorAll(".art-card").forEach((card, index) => {
    card.addEventListener("click", () => openLightbox(artworks[index]));
  });
  observeReveals();
}

function renderFeatured() {
  featuredGrid.innerHTML = allArtworks.slice(0, 10).map((artwork, index) => `
    <article class="featured-card reveal" data-index="${index}">
      <img src="${artwork.src}" alt="${artwork.title}" loading="lazy" />
      <div class="featured-meta">
        <span>${artwork.category}</span>
        <strong>${artwork.title}</strong>
        <em class="view-artwork">View Artwork</em>
      </div>
    </article>
  `).join("");
  featuredGrid.querySelectorAll(".featured-card").forEach((card, index) => {
    card.addEventListener("click", () => openLightbox(allArtworks[index]));
  });
}

function renderServices() {
  servicesGrid.innerHTML = services.map(([title, desc, src]) => `
    <article class="service-card reveal">
      <img src="${src}" alt="${title}" loading="lazy" />
      <div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <a class="btn btn-ghost magnetic" href="#contact">Request Quote</a>
      </div>
    </article>
  `).join("");
}

let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

renderTabs();
renderFeatured();
renderGallery();
renderServices();
observeReveals();

tabs.addEventListener("click", (e) => {
  const button = e.target.closest(".tab");
  if (!button) return;
  tabs.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
  button.classList.add("active");
  renderGallery(button.dataset.category);
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

document.querySelectorAll(".hero-portrait, .featured-card").forEach((el) => {
  window.addEventListener("scroll", () => {
    const rect = el.getBoundingClientRect();
    const offset = (window.innerHeight - rect.top) * 0.015;
    el.style.setProperty("--parallax", `${offset}px`);
  }, { passive: true });
});

const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const msg = `Hello Suresh! I'd like to discuss an artwork.%0A%0A` +
      `Name: ${d.get("name") || ""}%0APhone: ${d.get("phone") || ""}%0A` +
      `Email: ${d.get("email") || ""}%0ARequirement: ${d.get("need") || ""}%0A` +
      `Message: ${d.get("message") || ""}`;
    window.open(`https://wa.me/917019920839?text=${msg}`, "_blank");
  });
}
