# Hunterbot
[visit deployed site](https://github.com/eggsmayhem/hunterfrontend/blob/main/public/hunterbotdallenobg2.png)

!['hunterbot](https://github.com/eggsmayhem/hunterfrontend/blob/main/public/hunterbotdallenobg2.png)'

This is a simple talking bot made with React/NextJS using GPT-3 prompting. The bot "reads the news" through an API call. The newspaper animation is acheieved through basic CSS. 

The Howler audio component library is used to facilitate dyanamic loading and playing of audio files from an S3 bucket URL that is generated using Polly through and AWS lambda function. Loading this audio even within mobile restrictions was surprisingly the most difficult element of this app.