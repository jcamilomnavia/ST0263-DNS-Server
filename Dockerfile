FROM store/internetsystemsconsortium/bind9:9.16

# Copy configuration files
COPY ./config/named.conf.options /etc/bind/
COPY ./config/named.conf.local /etc/bind/
COPY ./config/zones/db.widelab.tl /etc/bind/zones/
