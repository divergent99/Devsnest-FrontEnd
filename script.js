const server = {
    serverName:"Devsnest",
    getInvite: function(a,b)
    {
        console.log(this);
        console.log(a + b);
    }
}
const server2 = {
    serverName:"TheDeveloperCommunity",
}
/* BIND */
const ab = server.getInvite.bind(server2,1,2)
ab()
/* CALL */
server.getInvite.call(server2,1,2)
/* APPLY */
server.getInvite.apply(server2,[1,2])