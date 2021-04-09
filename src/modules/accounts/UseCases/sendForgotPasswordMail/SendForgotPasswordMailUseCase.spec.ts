import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;
let dateProvider: DayjsDateProvider;

describe("Send Forgot", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    dateProvider = new DayjsDateProvider();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send forgot password mail from user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      name: "Lela Carter",
      driver_license: "1444660",
      email: "ovzapil@fis.io",
      password: "Xx9oRgOP0",
    });

    await sendForgotPasswordMailUseCase.execute("ovzapil@fis.io");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send forgot password mail if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("debrumdi@puzfus.sa")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("should be able to create a an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      name: "Wayne Black",
      driver_license: "0922033",
      email: "fad@zikbeulu.jm",
      password: "Xx9oRgOP0",
    });

    await sendForgotPasswordMailUseCase.execute("fad@zikbeulu.jm");

    expect(generateTokenMail).toHaveBeenCalled();
  });
});
