function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = '10.6.6.1:1080';
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
        "nixcraft.com",
        "reddit.com",
        "www.cyberciti.biz",
        "mail.google.com",
        "www.pandora.com",
        "www.google.com",
        "ipv6.google.com"
    );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if ( localHostOrDomainIs(host, value) ) {
            return "SOCKS "+proxyserver; DIRECT
        }
    }
    return "DIRECT";
}
