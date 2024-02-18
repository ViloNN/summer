export default defineEventHandler(async (event) => {
  try {
    const data = await $fetch(
      "https://forecast7.com/pl/43d8215d67/pirovac/?format=json",
      {
        method: "GET",
        headers: {
          accept: "application/json, text/plain, */*",
        },
      }
    );

    return data;
  } catch (err) {
    throw createError({
      message: "Fetching failed",
      statusCode: 401,
    });
  }
});
