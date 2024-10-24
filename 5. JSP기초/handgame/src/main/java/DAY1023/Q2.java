package DAY1023;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Q2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] selections = {"가위", "바위", "보"};

        List<String> playerSelections = Arrays.asList("가위", "바위", "보", "가위", "바위"); // 예시로 플레이어의 랜덤 선택을 고정
        List<String> comSelections = Arrays.asList("보", "가위", "바위", "보", "가위"); // 예시로 컴퓨터의 랜덤 선택을 고정

        System.out.println("플레이어의 랜덤 선택: " + playerSelections);
        System.out.println("컴퓨터의 랜덤 선택: " + comSelections);

        for (int i = 0; i < playerSelections.size(); i++) {
            System.out.println("\n라운드 " + (i + 1));
            System.out.println("이 중 하나를 골라주세요! " + playerSelections);

            System.out.print("입력: ");
            String userChoice = sc.nextLine(); // 사용자의 입력을 받음

            String computerChoice = comSelections.get(i);
            System.out.println("컴퓨터의 선택: " + computerChoice);

            // flag를 사용하여 처음 일치한 값만 "use"로 변경
            boolean isReplaced = false;
            List<String> updatedPlayerSelections = playerSelections.stream()
                    .map(choice -> {
                        if (choice.equals(userChoice) && !isReplaced) {
                            isReplaced = true;
                            return "use";
                        } else {
                            return choice; // 이후 중복된 값은 변경하지 않음
                        }
                    })
                    .collect(Collectors.toList());


            List<String> filteredList = updatedPlayerSelections.stream()
                    .filter(choice -> choice.equals("use"))
                    .collect(Collectors.toList());

            System.out.println("변경된 플레이어의 선택: " + filteredList);
        }
        sc.close();
    }
}
