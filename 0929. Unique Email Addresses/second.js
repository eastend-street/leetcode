const numUniqueEmails = emails => {
  const set = new Set();
  for (const email of emails) {
    const [name, domain] = email.split("@");
    name = name.replace(/\.|\+.+$/g, '');
    set.add(`${name}@${domain}`);
    // set.add(name.replace(/\./g, "").split("+")[0] + "@" + domain);
  }
  return set.size;
};

// ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ])
);

// sample
var numUniqueEmails = function(emails) {
    const emailSet = new Set();
    
    for(let email of emails){
        let [name, domain] = email.split('@');
        name = name.replace(/\.|\+.+$/g, '');
        emailSet.add(`${name}@${domain}`);
    }
    return emailSet.size;
};
