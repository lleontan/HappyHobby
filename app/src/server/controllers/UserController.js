class UserController {
  // Arguments - user 
  // Pre conditions - user logged in
  // Post conditions - N/A
  // Returns a JSON object with user information
  getUserInformation(user) {
    return user.Information
  }
  // Arguments - user 
  // Pre conditions - user logged in
  // Post conditions - N/A
  // Returns a new JSON object with a list of interests
  getUserInterest(user) {
    return user.Interests
  }
}