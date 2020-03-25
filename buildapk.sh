echo ビルドを開始します
ionic cordova build android --prod --release
echo ビルドが完了しました 署名を開始します
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk spila
echo 署名が完了しました zipalignを開始します
echo -n コードネームを入力してください :
read codename
echo $codename で開始します
echo ファイル削除
rm $codename .apk
echo zipalignコード
echo "zipalign -v 4 /Users/uparupa/qiitareader-ionic5-rebuild/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $codename .apk"

