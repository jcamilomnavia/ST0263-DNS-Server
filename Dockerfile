FROM store/internetsystemsconsortium/bind9:9.16

# Copy configuration files
COPY ./config/named.conf /etc/bind/
