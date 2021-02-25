$TTL    604800
@       IN      SOA     ns1.widelab.ml. root.widelab.ml. (
                  5     ; Serial
             604800     ; Refresh
              86400     ; Retry
            2419200     ; Expire
             604800 )   ; Negative Cache TTL
;
; name servers - NS records
     IN      NS      ns1.widelab.ml.
     IN      NS      ns2.widelab.ml.

; name servers - A records
ns1.widelab.ml.     IN      A           100.25.73.61
ns2.widelab.ml.     IN      A           18.214.202.100

server  IN      A           35.169.6.223
mail    IN      A           18.214.202.100

        IN      CNAME       server
www     IN      CNAME       server
mail    IN      MX          1 widelab.ml.