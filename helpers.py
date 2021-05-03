
import requests

def send_command(cmd):
    headers = {
    'Content-Type': 'text/xml; charset=UTF-8',
    'SOAPACTION': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
    'X-Auth-PSK': '8421',
    }

    data = '<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1"><IRCCCode>AAAAAQAAAAEAAAAVAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>'
    requests.post('http://10.1.1.181/sony/IRCC', headers = headers, data = data)

