export default defineEventHandler(async (event) => {

  // handle query params
  // const { name } = useQuery(event)

  // handle post data
  // const { age } = await useBody(event)

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }

  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=tlaj6hBZyoqSEYvFb6B1LfnyLu5YjRE4szS2FrEl')

  return data
})