import qrcode

qr_img = qrcode.make('https://www.blafp.or.kr/blafp/')

qr_img.save('C:/Users/lab2-10/Desktop/heropy-coffee-main/trip.png') #\ -> /로 바꿔줘야 syntaxerror 안남
print(qr_img.size)