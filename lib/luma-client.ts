import Luma from "luma-agents";

const client = new Luma();

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type GenerateImageEditOptions = {
  prompt: string;
  source: {
    data: string;
    media_type: string;
  };
};

export async function generateImageEdit({
  prompt,
  source,
}: GenerateImageEditOptions) {
  let generation = await client.generations.create({
    type: "image_edit",
    prompt,
    source,
  });

  const deadline = Date.now() + 120_000;

  await wait(20_000);

  while (generation.state !== "completed" && generation.state !== "failed") {
    if (Date.now() > deadline) {
      throw new Error(`Luma generation ${generation.id} timed out`);
    }

    generation = await client.generations.get(generation.id);
    await wait(2_000);
  }

  if (generation.state === "failed") {
    throw new Error(
      `Luma generation failed: ${generation.failure_reason || "Unknown error"}`
    );
  }

  return generation.output?.map((item) => item.url) || [];
}