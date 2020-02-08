function numUniqueEmails(emails) {
  let set = new Set();
  for (let i = 0; i < emails.length; i++) {
    let array = emails[i].split("@");
    set.add(array[0].replace(/\./g, "").split("+")[0] + "@" + array[1]);
  }
  return Array.from(set).length;
}

// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ])
);
