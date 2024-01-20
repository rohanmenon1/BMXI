const writerUser = function writeUserData(userId, userName, emailId, password) {
  const db = database;
  set(ref(db, 'users/' + userId), {
    username: userName,
    email: emailId,
    pass : password
  });
}

export default writerUser;