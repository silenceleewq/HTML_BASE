/**
 * Created by HYB on 2017/3/31.
 */

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", whichpic);
}
