function FindProxyForURL (url, host) {
    // Your proxy server name and port
    var proxyserver = '10.139.0.2:3128';
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
        "mail.google.com",
        "accounts.google.com",
        "www.cyberciti.biz",
        "www.pandora.com",
        "www.google.com",
        "www.dnsleaktest.com",
        "ipv6.google.com"
    );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if ( localHostOrDomainIs(host, value) ) {
            //return "PROXY "+proxyserver;
            return "PROXY "+proxyserver;DIRECT;
        }
    }
    return "DIRECT";
}
