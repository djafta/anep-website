import argon2 from "argon2";

async function test() {
  const password = "MyAdminPassword2026!";

  const hash = "$argon2id$v=19$m=65536,t=3,p=4$5E1YqD/pmib3gFpNDJy6JQ$xnUXO3lrIVZmD6oDswkKbUQakQfIGdfXLFjdXJjv03I";

  console.log(await argon2.verify(hash, password));
}

test();