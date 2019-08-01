import { logoutUser, loginUser, getUser, isLoggedIn } from '../../actions/userHelpers'

test('Should return logged out if no user', async () => {
  const res = await logoutUser()
  expect(res.data).toEqual({msg: "Logged out"})
})

test('Should login a user', async () => {
  const credentials = {email: "test@test.com", password: "123456"}

  const res = await loginUser(credentials)
  expect(res.data).toEqual({msg: "Logged in"})
})

test('Get user should require authorization', async () => {
  await expect(getUser()).rejects.toThrow("Request failed with status code 401")
})

test("Logged in should return false", async () => {
  let res = await isLoggedIn()
  expect(res.data).toEqual({logged_in: false})
})


