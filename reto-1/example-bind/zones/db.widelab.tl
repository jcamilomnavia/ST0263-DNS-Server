$TTL    604800
@       IN      SOA     ns1.widelab.tl. root.widelab.tl. (
                  3       ; Serial
             604800     ; Refresh
              86400     ; Retry
            2419200     ; Expire
             604800 )   ; Negative Cache TTL
;
; name servers - NS records
     IN      NS      ns1.widelab.tl.

; name servers - A records
ns1.widelab.tl.          IN      A      172.100.0.2

app.widelab.tl.        IN      A      172.100.0.3
mail.widelab.tl.        IN      A      172.100.0.4