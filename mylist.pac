function FindProxyForURL(url, host) {
    if ( localHostOrDomainIs(host, "dnsleaktest.com") ) {
        return "SOCKS 10.6.6.1:1080; DIRECT";
    } else {
        return "DIRECT";
    }
}
