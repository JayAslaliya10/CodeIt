import requests
from bs4 import BeautifulSoup
from flask import Flask,request, jsonify

app=Flask(__name__)

@app.route('/api/getdata')
def scrape():
   url_headers={'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win 64 ; x64) Apple WeKit /537.36(KHTML , like Gecko) Chrome/80.0.3987.162 Safari/537.36'}

   body=request.get_json()
   # print(type(body))
   # print(body["qn_url"])

   url=body["qn_url"]
   webpage=requests.get(url,headers=url_headers).text
   soup=BeautifulSoup(webpage,'lxml')
#    print(soup.prettify())  # print the contents

   # The input is bs4.elemnt.ResultSet
   ip=[]
   for i in soup.find_all('div',class_='test-example-line'):
     # print(i.text.strip())
     ip.append(i.text.strip())
   # we got input as list now
#    ip

   # The output is string  where each new line in output is preceded by \n
   op=soup.find_all('pre')[1].text.strip()
#    op

#    The result is a dictionary with ip and op as parameters, where ip is input and op is expected output
   res=dict()
   res['ip']=ip
   res['op']=op
#    res
   # print(res)
   return jsonify(res)


if __name__=="__main__":
    app.run(debug=True)