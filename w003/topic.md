# Distributed Systems

Asynchronous, not strongly coupled by a clock, many parts talking to each other, resiliant to failure.

## Ethernet

Local / small networks, 1500 MTU, CRC32 / Error detection.

## PPP / GPON

ISP

## IPv4

Global, big networks, another checksum / error detection, fragmentation due to variable MTU.

Traditionally unicast, aka one IP to one computer. Multicast is relatively rare, anycast is used for DNS, broadcast only locally.

## BGP

Routing of IP

## DNS

Domain name system, generally uses anycast

## TCP

Many ports, another 2 bytes checksum, retry, discover window size and handshake. Very old. Identified by IP.

## UDP

## ICMP

## QUIC

TCP/2

## HTTP/3

### References

- https://en.wikipedia.org/wiki/Ethernet
- https://en.wikipedia.org/wiki/SerDes
- https://en.wikipedia.org/wiki/Ethernet_frame
- https://en.wikipedia.org/wiki/Point-to-Point_Protocol_over_Ethernet
- https://en.wikipedia.org/wiki/GPON
- https://en.wikipedia.org/wiki/Internet_Protocol_version_4
- https://en.wikipedia.org/wiki/Border_Gateway_Protocol
- https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
