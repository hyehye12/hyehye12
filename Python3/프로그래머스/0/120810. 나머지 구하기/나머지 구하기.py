def solution(num1, num2):
    answer = num1 - ( num2 * int(num1 / num2) )
    return answer