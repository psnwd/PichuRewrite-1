module.exports = {
    name: 'findByUsername',
    execute: (guild, username) => {
    return guild.members.cache.find(u => u.user.username === username);
    }
};