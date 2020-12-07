
---- Notes

## questionParser 

'* Q: ' en chars puis string
* le stop
* map join

## badParser

copy paste:
'* ' puis stop, puis eol opt
join le text, mettre question dans le map, drop *: 


## quizzParser

qParser then separation rParser
response.value.size
drop separation

## goodParser

'* ' puis stop sans rep,  puis rep, puis eol opt

## answerParser

bad or good
 