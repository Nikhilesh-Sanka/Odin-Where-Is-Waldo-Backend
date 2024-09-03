const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.instruction.deleteMany({});
  await prisma.game.deleteMany({});
  // adding the first game //
  await prisma.game.create({
    data: {
      name: "ancient world",
      image_url:
        "https://wcpfbviuzlawwrsfvnnp.supabase.co/storage/v1/object/sign/game-images/main-images/image1.jpg_large?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYW1lLWltYWdlcy9tYWluLWltYWdlcy9pbWFnZTEuanBnX2xhcmdlIiwiaWF0IjoxNzI1Mjg1MDUyLCJleHAiOjQ4Nzg4ODUwNTJ9.Tpwg4z3JQ9uZ_WY_LOLh6pFMklP8OjOjar_KogjLfJU&t=2024-09-02T13%3A50%3A52.808Z",
      instructions: {
        create: [
          {
            instruction: "doctor",
            image_url:
              "https://wcpfbviuzlawwrsfvnnp.supabase.co/storage/v1/object/sign/game-images/main-images/iname-1-instruction-1.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYW1lLWltYWdlcy9tYWluLWltYWdlcy9pbmFtZS0xLWluc3RydWN0aW9uLTEuanBlZyIsImlhdCI6MTcyNTI4NTI4NywiZXhwIjo0ODc4ODg1Mjg3fQ.iCR25GPQbPLQa_p8UItS9DhyaB02LPXJjaiWKbACBZ8&t=2024-09-02T13%3A54%3A47.419Z",
            x_coordinate: JSON.stringify([72, 75]),
            y_coordinate: JSON.stringify([33, 36]),
          },
          {
            instruction: "magician",
            image_url:
              "https://wcpfbviuzlawwrsfvnnp.supabase.co/storage/v1/object/sign/game-images/main-images/image-1-instruction-2.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYW1lLWltYWdlcy9tYWluLWltYWdlcy9pbWFnZS0xLWluc3RydWN0aW9uLTIuanBlZyIsImlhdCI6MTcyNTI4NTQ5MSwiZXhwIjo0ODc4ODg1NDkxfQ._7Zf3tMNMoGVvFcVKGQpglPFUO7GZhE3-uD7XmTOk0c&t=2024-09-02T13%3A58%3A11.914Z",
            x_coordinate: JSON.stringify([74, 77]),
            y_coordinate: JSON.stringify([64, 67]),
          },
          {
            instruction: "hard worker",
            image_url:
              "https://wcpfbviuzlawwrsfvnnp.supabase.co/storage/v1/object/sign/game-images/main-images/image-1-instruction-3.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYW1lLWltYWdlcy9tYWluLWltYWdlcy9pbWFnZS0xLWluc3RydWN0aW9uLTMuanBlZyIsImlhdCI6MTcyNTI4NTYyNSwiZXhwIjo0ODc4ODg1NjI1fQ.zLm_U_ro508av7WxRuYkJmzXd0k1QgMVlJVcqK3uGCM&t=2024-09-02T14%3A00%3A25.521Z",
            x_coordinate: JSON.stringify([82, 85]),
            y_coordinate: JSON.stringify([17, 21]),
          },
        ],
      },
      leaderBoard: {
        create: {},
      },
    },
  });
  // adding the second game //
  await prisma.game.create({
    data: {
      name: "Nintendo",
      image_url:
        "https://wcpfbviuzlawwrsfvnnp.supabase.co/storage/v1/object/sign/game-images/main-images/image2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYW1lLWltYWdlcy9tYWluLWltYWdlcy9pbWFnZTIud2VicCIsImlhdCI6MTcyNTI4NjQzOCwiZXhwIjo0ODc4ODg2NDM4fQ.z_0Yp0pFoML4SpQGbnjwV8tNbTAQoxdUoTKIL5WsN6s&t=2024-09-02T14%3A13%3A58.850Z",
      instructions: {
        create: [
          {
            instruction: "sleeping turtle",
            image_url:
              "https://wcpfbviuzlawwrsfvnnp.supabase.co/storage/v1/object/sign/game-images/main-images/image-2-instruction-1.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYW1lLWltYWdlcy9tYWluLWltYWdlcy9pbWFnZS0yLWluc3RydWN0aW9uLTEuanBlZyIsImlhdCI6MTcyNTI4Njc5NCwiZXhwIjo0ODc4ODg2Nzk0fQ.JnhfWDkgNoloId5dH7MHD6lI0e4WChk74j3MrSBayOw&t=2024-09-02T14%3A19%3A54.713Z",
            x_coordinate: JSON.stringify([16, 22]),
            y_coordinate: JSON.stringify([31, 34]),
          },
          {
            instruction: "ghost",
            image_url:
              "https://wcpfbviuzlawwrsfvnnp.supabase.co/storage/v1/object/sign/game-images/main-images/image-2-instruction-2.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYW1lLWltYWdlcy9tYWluLWltYWdlcy9pbWFnZS0yLWluc3RydWN0aW9uLTIuanBlZyIsImlhdCI6MTcyNTI4NzAzMiwiZXhwIjo0ODc4ODg3MDMyfQ.vXzXj5LaazEE6Jp1e5FZrTsQuHSZwLTuJHxHCb55idU&t=2024-09-02T14%3A23%3A52.652Z",
            x_coordinate: JSON.stringify([32, 38]),
            y_coordinate: JSON.stringify([60, 68]),
          },
          {
            instruction: "penguin",
            image_url:
              "https://wcpfbviuzlawwrsfvnnp.supabase.co/storage/v1/object/sign/game-images/main-images/image-2-instruction-3.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYW1lLWltYWdlcy9tYWluLWltYWdlcy9pbWFnZS0yLWluc3RydWN0aW9uLTMuanBlZyIsImlhdCI6MTcyNTI4NzM3NiwiZXhwIjo0ODc4ODg3Mzc2fQ.mRWgMcVEbblSld0AOOfaF2YNQR5VtLLASFA2VppoIm0&t=2024-09-02T14%3A29%3A36.238Z",
            x_coordinate: JSON.stringify([80, 84]),
            y_coordinate: JSON.stringify([71, 75]),
          },
        ],
      },
      leaderBoard: {
        create: {},
      },
    },
  });
}

main();
