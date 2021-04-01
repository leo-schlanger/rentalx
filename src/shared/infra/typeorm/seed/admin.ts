import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "@shared/infra/typeorm";

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS (id, name, email, password, is_admin, driver_license, created_at)
     values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'XXXXXXX', now())
    `
  );

  await connection.close();
}

create().then(() => {
  console.log("User admin created!");
});
