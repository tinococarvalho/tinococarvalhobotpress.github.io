FROM botpress/server:v12_22_0
ADD . /botpress
WORKDIR /botpress
CMD ["./bp"]
