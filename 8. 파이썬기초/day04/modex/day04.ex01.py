'''
import mod1
result = mod1.add(10,20)
print(result)

result = mod1.sub(20,10)
print(result)

PI = mod1.PI
print(PI)
'''

from mod1 import add, sub, PI

print(add(10,20))
print(sub(20,30))
print(PI)