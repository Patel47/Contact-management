import { useToast } from "@/components/ui/use-toast";

const useNotifications = () => {
  const { toast } = useToast();

  const successNotification = (title: string, message: string) => {
    return toast({
      variant: "success",
      title,
      description: message,
    });
  };

  const errorNotification = (title: string, message: string) => {
    return toast({
      variant: "destructive",
      title,
      description: message,
    });
  };

  return { successNotification, errorNotification };
};

export default useNotifications;
