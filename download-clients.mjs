// One-time script to download client logos into public/clients/
// Run locally with: node download-clients.mjs
// (Run this from your project root — it writes into ./public/clients/)

import { writeFile, mkdir } from "fs/promises";
import path from "path";

const urls = [
  "https://lh3.googleusercontent.com/sitesv/AG8ngQWqWouPATRw7glJmmhdy5lG9RB4iZlEQJI5iMjgn0fMglohEnnEBYhT_WYDZqnRVT6gRupPvcOXeqk-MWHu_hXKqbT9mr6zi96ZLbnoaG04AZrore6EoZSafd7RcgeZk7XI8Rr9mq7H1826vuaGahTK_1Hk_y4xsdpfF91r9DYVWJDJ2A8NTsDsckOg2A53gidAcG_2FeDnoMKd=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQWGc3_EZn_Yu0tHAD5DEL2bmKHo_m__8k404L3wG4f4nxohH_YFZ1ULfCgx1mXl1nZ3OhTgFHODZolh0TAG-sCr3Ev5EMSQ2qObAWpPWjxwiOfqk-vrYtqVp9h9omZWwLVweAuSomdWEAIlW64XqhLM7p9Nd74vhe2c4wZGkDe8uYXsuTy05w5p41PNTwJIMhX_cl6iCrRJB6PaTFE=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQVs5KY0AtzZZLrtwFE9hNCzs8Q_TUqb9mWVfsT55ZRvw8i2pH8oT_nbAlDGpSMU1X-4WBAG_Mh91PxirP2Hr86pC72C5yq7VYkATbA6Uoknax2Gm7BV3QqiAzeEO2y91bAerpkv15jaWavcw0Yf_mV1heirmKwQqWoJlTNZ62Wjk131-5p7cl5e8HQYsxF-3KxevgSJB_4FFv79=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQVfFYLsiE--pr1w3IYUpFK2CNVdPciWdKc9cWJyL465Fn0FPR6XH0aomnE4vaIh2lnuFdSRoTeUWKEerjKdZlkIQsP88rj05iXCeIm8eZZZhK7o82EB292SrnIe72cmIS6Gl81PLFnTYgRR2HW2g0DZIq9vLr8rgWLaoIqRlCK0E1nyapfEJmACs9HxjYAmEDDq4dybc_WB9c4tRWU=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQWGBmng6gipQoc3AGSJkZt0JH0cY5K-IrAPdTHnG7_fFNIE_guZw-w_QTlyqCyWGWlIHWqYgbp2XgKbV7kVy2RytEENOx8akV1ZRODpVjEJU29FfD6MHObCN2E4m0pblUtk6OrBxcWN9DL-fTsOvhhkNeJyr5Dtkisl10DoLAf7x9ZEZGqy3udE2EpqQrGPyehyOsimqQtKNhVI=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQUuzua3Ul8u5iZev7aYuX5wLfuvWKpLXxD26WhjNT-ebeXiMRamJKDQTATb9Zfb04-NSx3_lx6ZqECYM0ENevYA0jkIVF_x88Lmi5gs1wEcDBAPPt2BaYNTC-oXLCJ50Ma_aUpOa0Tx0ALQhi8YRf-BMwIH5VERwA5bI04MstDSxOC-PGfZodvRDr8NohA6JdYT71oXN9b47qUyGOg=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQWHTk4X3scEGYYt8PZp3XhLLA8JBKOU9EFlO6yxJjugOqvgWOqLHFJY8PgpkNGAxK6DTQKmYHmBEomNG5X7x3bWsLHr_17gCl55s13h2TSPE52AiIMISmnmJFdqd5NX5PUjyXGCglTTs82QYqGtU6OOP6CxzNtCKGxbHpXYeUUZAWKFWDOyb7KBgU_THbqpWVzLX1n7g_mM4Xpz=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQUZKDSeNojxaskfP-RvxWfjKYyhwS1eovOydFAbjcGADHSNOErmd9hgRJVm0qSao7POz19kIl_GUR9faU2sL9g4jwdjX6ldJj0i8pS7hoBtNXsAxplCHGFvlt4CQzon_wmTEftcrfGflTlfgQpLREx4i7BOOb_B_PK5NZNJcNeAPtqs0XAsXohk7T5YkzASIP9M34U87G0mhUbE=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQWRYIz0xC2Ry00a_WKzCJr61TvJYhVCj4FwIfatf0gpS-Eixzrt81VvHXyviYhbjWM1h7lFdE2p1f9B0pIgFS9IjHyXT9i6VXCtoJjI2nEcdtZXzmOq3n4JH5JtnOaJHXSFoGUDdp7QRoiYWInVNSZZBCXgkDqSbbnKQ3hlxPGQWMOqiStewIoJlwMBJlLpD62OZ20wQ_TSYY2x=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQWLYztl7QdeGeoOZPX6Xm5hkmRHIhHZTiE-IWF5icHCJBYTroc5OEwYZUCjRg8ocN4FSdTBiHLF3rs5_Hfcipc_rSrtfIHZ_phT8l5piFqsriGxp3AjHm9qOTbXRZ7PjwC7eMjTk_PtWanZC2jZWtdtdnUnhbz7B55B5YMMx_63sULQb969G6PSoUnx7DnNhu-Mj46fR-w1ki5QMoo=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQXkf77c7U4aYfTSoJpqRNkg_Nf8k8tp1kcU6zN5Jbfue73hyrgLDTsEIm34Q6i2caj4SNtdaKnXBzSAPPzT29h5nCvDWgW7exYH3t2uyCGUFonrUwYDmc4qnYNKEbo7OgT1mMPcLHvE_GnO-jUnCoiGxUK4vgB2Ga5utZYyTJqaAyqPFCkPGDfCTdo2zjDmFht4I10uAoX6GpZbVlg=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQUX0Km957qTgnjbMrXVkBHrC4OIlvaf2y6OOjmXY8kQDgZElZBjhELssUwJW-ADUBkQeTsYJqM6JcPrUxwbOjQg5j-e7hoagoXKZ61IToDj4sXbmozl6G7fjYuPHKAiAkiElEt7yG0F-vl46G-0HC6V3lkouO5LWH5q1gbhjt3gb2AN_9aKzeRieIp7yQk0qXCUMZpRmKGoXloqvYU=w400",
  "https://lh3.googleusercontent.com/sitesv/AG8ngQV0Bm6O7kbR1hkSbqEERdJwD4YCRysMbkQ41_H4I3jmCw5v6O0toNNpc8eq_ufzU5_9o_71hqwQzAeQr2GI9wAYAEYexivtJwndiNLzpLPobIbtGy2h87yA7QxkO9-87Zht8NC-CK6lbnkGJX1DKqTy8kilknq2Pm85lmQibbt_v9d3ztBLZQ_zKpJtaBIj_eLqmxI3XrQSiTNs=w400",
];

const outDir = path.join(process.cwd(), "public", "clients");

async function main() {
  await mkdir(outDir, { recursive: true });

  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i], {
      headers: { Referer: "https://www.arsinfrasteel.com/" },
    });
    if (!res.ok) {
      console.error(`Failed (${res.status}): logo ${i + 1}`);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const file = path.join(outDir, `client-${i + 1}.png`);
    await writeFile(file, buf);
    console.log(`Saved ${file}`);
  }

  console.log("Done. Update ClientCarousel.tsx to use /clients/client-N.png");
}

main();
