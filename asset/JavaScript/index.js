
      // 変数定義（「//」から始まる行はコメントアウト）
      const id_1 = document.getElementById("id_1");
      const id_2 = document.getElementById("id_2");
      const id_3 = document.getElementById("id_3");

      // id_1（id_2）をクリックしたら、functionの中身を実行
      id_1.onclick = function id1Click() {
        alert("id_1クリックしたよ！");
      }
      id_2.onclick = function () {
        alert("id_2クリック！関数名は書いても書かなくてもOK！");
      }

      // HTML側にクリックイベント記述
      function pClick() {
        alert("pタグクリック！HTMLでonclick属性書いたよ！");
      }

      const stylesheet = document.styleSheets.item(0);

      // 上で定義したid_4はここでも使えるよ！
      id_4.onclick = function () {
        //第2引数は、「CSSの何番目のルールにするか」。0始まりの番号。
        stylesheet.insertRule("#id_4 {font-size: 20px;}", 0);
        stylesheet.insertRule("#id_4 {background-color: pink;}", stylesheet.cssRules.length);
      }


      document.writeln("<p>6. JSでHTML記述！（リロードするたび少し表示が遅れてるけど、わかるかな？）</p>");
      document.writeln("<p>7. URLは、" + document.URL + "だよ！</p>");
      document.writeln("<p>8. このページのtitleは、「" + document.title + "」だよ！</p>");
