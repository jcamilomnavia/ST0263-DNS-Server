$TTL    604800
@       IN      SOA     ns1.widelab.tl. root.widelab.tl. (
                  5     ; Serial
             604800     ; Refresh
              86400     ; Retry
            2419200     ; Expire
             604800 )   ; Negative Cache TTL
;
; name servers - NS records
     IN      NS      ns1.widelab.tl.
     IN      NS      ns2.widelab.tl.

; name servers - A records
ns1.widelab.tl.     IN      A           100.25.73.61
ns2.widelab.tl.     IN      A           18.214.202.100

        IN      A           35.169.6.223
mail    IN      A           18.214.202.100

www     IN      CNAME       widelab.tl.
mail    IN      MX          1 widelab.tl.