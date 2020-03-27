module.exports = {
    name: 'findByID',
    execute: (guild, id) => {
    return guild.members.cache.find(u => u.user.id === id);
    }
};