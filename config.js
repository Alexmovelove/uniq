exports.num_day = 0;

	var d = new Date(); // Today!
	d.setDate(d.getDate()-exports.num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	
exports.bd_name = "family";
exports.password_mysql = "BogSilSavaof";
exports.user_mysql = "main";
exports.hive_name = "hive-153018";
exports.image_list = `![`+d+`.png](https://cdn.steemitimages.com/DQmbXSrdwm2MntCHrKSyfhAgNtQhMXNdUXK7zv8ztYAHzCV/`+d+`.png)`;
exports.title_name = "SteemFamily";
exports.url_post = `technical-post-for-plagiarism-suspicion-check-moderators-2022-part-1
`;
exports.moderators_list = "@greatketty";


