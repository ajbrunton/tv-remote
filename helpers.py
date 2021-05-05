
import requests
import json

def send_command(cmd):
    with open('command-list.json') as f:
        data = json.load(f)
        tv_command = next((item for item in data if item["name"] == cmd), None)['value']

    headers = {
    'Content-Type': 'text/xml; charset=UTF-8',
    'SOAPACTION': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
    'X-Auth-PSK': '8421',
    }

    data = f'<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1"><IRCCCode>{tv_command}</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>'
    requests.post('http://10.1.1.181/sony/IRCC', headers = headers, data = data)

# send_command('TvPower')