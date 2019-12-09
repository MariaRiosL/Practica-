var imgData = 'data:img/jpg;fuego';

doc.setFontSize(40);
doc.text(40, 20, "Octocat loves jsPDF");
doc.addImage(imgData, 'jpg', 10, 40, 180, 180);